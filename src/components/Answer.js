import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

const Answer = ({ kana, description, openAnswer, onClick }) => (
 <div>
   <input id='answer' />
   <button onClick={onClick}>
     Answer
   </button>
   {(() => {
     if(openAnswer) {
       // TODO: ref使う方法を調べる
       let input = document.getElementById('answer').value
       let correct = (input == kana) ? true : false
       return (
         <p>
           {correct ? '正解' : '不正解'}
           {kana}
           <br />
           解説: {description}
         </p>
       )
     }
   })()}
 </div>
)

Answer.propTypes = {
  kana: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openAnswer: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Answer
