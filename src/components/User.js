function User(props){
    return(
      <>
        <h1>{props.isLogIN? `${props.name } ${props.sname} (${props.age}) ` : 'Giriş Yapılmadı' }</h1>
        
        {props.friends.map((friend,index)=>(
            <div key={index} > {index}- {friend}</div>
        ))}
        </> 
    );
}
export default User;