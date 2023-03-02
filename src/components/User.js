import PropTypes from 'prop-types';

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
User.props={
name: PropTypes.string.isRequired,
sname: PropTypes.string,
age: PropTypes.number,
isLogIN: PropTypes.bool,
friends: PropTypes.array
};
export default User;