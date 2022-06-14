import React, { Component } from "react";
import axios from 'axios'
import Main from "../template/Main";


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user : { name: '', email: '' },
    list: []
}

export default class userCrud extends Component {

    state = {...initialState}

    componentWillMount(){
        axios(baseUrl)
            .then(resp => 
                this.setState({list: resp.data})    
            )
    }

    clear(){
        this.setState({ user: initialState.user })
    }

    save(){
        const user = this.state.user
        const id = user.id
        const method = id ? 'put' : 'post'
        const url = id ? `${baseUrl}/${id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(e => e.id !== user.id)
        if(user) list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">
                                Nome
                            </label>
                            <input type="text" name="name" id="name" className="form-control"
                                value={this.state.user.name} onChange={e => this.updateField(e)}
                                placeholder="Digite um nome..."
                                />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" className="form-control" name="email" id="email" 
                                value={this.state.user.email}
                                placeholder="Digite o email..."
                                onChange={e => this.updateField(e)}
                                />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}
                            >
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp =>{
                const list = this.getUpdatedList(null)
                this.setState({list})
            })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return (
            this.state.list.map(user => {
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning">
                            <i className="fa fa-pencil"/>
                        </button>
                        <button className="btn btn-danger">
                            <i className="fa fa-trash"/>
                        </button>
                    </td>
                </tr>
            })
        )
    }

    edit(user){

    }

    render(){
        console.log(this.state.list);
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}