

 const  AppModel:any = {
 
   sendToClient : (num :number, client:any) => {
    client.send(
      JSON.stringify({
        num,
        type: "getArray",
      })
    );
  }

};

export default AppModel;
