export default function Button(props){
    const{text,number,bool,arr,obj,fun}=props;
    console.log(props)
    return(
        bool?<button onClick={fun}>{text}{number}</button>:<button>{obj.butt}</button>
    )
}