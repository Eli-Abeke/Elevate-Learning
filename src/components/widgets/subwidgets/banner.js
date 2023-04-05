import React from 'react'


export default function Banner(props) {
    const text = props.text
    const bgLink = props.bgLink
    const extendcss = props.extendcss
    var className = props.className
    var bigtext = props.bigtext
    var decorators = props.decor

    if (decorators = null){
      decorators = " "
    }

    if (className = null){
      className="bg"
    }

    if (bigtext) {

    if (bigtext == "hidden"){
      bigtext = '\u2800'
    }
    else (
      bigtext = bigtext
    )

      return(
        
          <div className={'h-[100%] bg-[#181919] overflow-hidden relative top-0 left-0'}>
            <div className='bg-[url("https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop")] bg-cover w-[100%] h-[100%] absolute'/>
              <div className="relative top-0 left-0 h-full">
              <p className="font-bold uppercase absolute bottom-0 left-0 tracking-tighter opacity-25 leading-[0.9] text-[14vw]">{bigtext}</p>
                <div className="absolute bottom-0 left-0 flex">
                  <p className="font-bold text-2xl">{text}</p>
                </div>
              </div>
          </div>
    
  
      )
    }
    else{
      return (
        
          <div className={'h-[100%] overflow-hiddens max-h-full  bg-[url("https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop")] bg-cover   bg-[#181919] '}>
              <div className="relative top-0 left-0 h-full">
              <p className="font-bold uppercase absolute bottom-0 left-0 tracking-tighter opacity-25 leading-[0.9] text-[14vw]">{text}</p>
                <div className="absolute bottom-0 left-0 flex">
                  <p className="font-bold text-2xl">{text}</p>
                </div>
              </div>
          </div>
    

      )
    }




}
