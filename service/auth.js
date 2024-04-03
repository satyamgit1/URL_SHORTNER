const sessionIdToUserMap = new Map(); // this is basically hashmap or a Diary


function  setUser(id, user) {
  return sessionIdToUserMap.set(id,user);
}

function getUser(id){
return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
}