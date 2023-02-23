function User(props){
    return(
        <h1>{props.isLogIN? `${props.name } ${props.sname} (${props.age}) ` : 'Giriş Yapılmadı'}</h1>
    );
}
export default User;