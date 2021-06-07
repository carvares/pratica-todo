import readlineSync from 'readline-sync';


    let options = ["add", "list","remove"]
    let list =[]

function Readline(){
    
    let index = readlineSync.keyInSelect(options, 'Type your command');

    if(options[index] ==="list"){
        if(list.length<1){
            console.log("no todos to show")
        } else{
        const checkTodo = readlineSync.keyInSelect(list,"What do you want to check/uncheck?")
       { checkTodo !== -1? list[checkTodo].includes("🔴")? list[checkTodo] ="🟢" + list[checkTodo].substring(1):list[checkTodo] ="🔴" + list[checkTodo].substring(1):Readline()}
    
    }
}
    if(options[index]==="add"){
        const newTodo = readlineSync.question('what do you want to do?')
        list.push(`🔴 ${newTodo}`)
        
    }
    if(options[index] === "remove"){
        if(list.length<1){
            console.log("no todos to remove")
        } else{
            
        let removeTodo = readlineSync.keyInSelect(list,"What todo you want to remove?")
        {removeTodo !== -1? list.splice(removeTodo,1):Readline;}
    }
}
    if(index === -1){
        return
    }

    
    Readline();
}

    Readline();
