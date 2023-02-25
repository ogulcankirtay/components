function User({name,sname,age,isLogIN,friends}){
    return(
      <>
        <h1>{isLogIN? `${name } ${sname} (${age}) ` : 'Giriş Yapılmadı' }</h1>
        
        {friends.map((friend)=>(
            <div key={friend.id} > {friend.id}- {friend.name}</div>
        ))}
        </> 
    );
}
export default User;