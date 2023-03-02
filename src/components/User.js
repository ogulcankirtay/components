import PropTypes from 'prop-types';

function User({name,sname,age,isLogIN,friends,adress}){
if(!isLogIN){
    return(<h1>Giriş Yapılmadı</h1>);
}

    return(
      <>
        <h1>{ `${name } ${sname} (${age}) ` }</h1>
        {adress.title}   {adress.zip}
        <br /><br />
        {friends.map((friend)=>(
            <div key={friend.id} > {friend.id}- {friend.name}</div>
        ))}
        </> 
    );
}

User.props={
name: PropTypes.string.isRequired,
sname: PropTypes.string,
age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
isLogIN: PropTypes.bool,
friends: PropTypes.array,
adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
})
};
User.defaultProps={
    isLogIN:false
}
export default User;