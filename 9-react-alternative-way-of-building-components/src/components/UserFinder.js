import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css'
import Users from './Users';
import ErrorBoundary from './ErrorBoundary'
class UserFinder extends Component{

    static contextType=UsersContext;

    constructor(){
        super();
        this.state={
            //(1)
            //filteredUsers:DUMMY_USERS
            filteredUsers:[],
            searchTerm:''
        }
    }

    //(1) if we want to fetch the users when component rendered for the first time
    //we use componentDidMount to make call (like fetching data from server)

    componentDidMount(){
        this.setState({
            filteredUsers:this.context.users
        });
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers:this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
            });
        }
    }

    searchChangeHandler(event){
        this.setState({
            searchTerm:event.target.value,
        });
    }


    render(){
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div> 
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}  

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//             <input type='search' onChange={searchChangeHandler} />
//         </div>    
//         <Users users={filteredUsers} />
      
//     </Fragment>
//   );
// };

export default UserFinder;