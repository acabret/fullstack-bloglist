import { useSelector } from "react-redux";

const UserInfo = () => {
    const user = useSelector((state)=>state.user)
    console.log(user);


  return (
    <div>
        <div>Welcome back {user} </div>
    </div>
  );
};

export default UserInfo;
