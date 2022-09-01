import React from 'react' 


const List = ({people}) =>  {
    return (
        <>
            {people.map((person) => {
               const {id, name, age, image} = person
               return (
                <article key={id} className='profile'>
                    <div className='profile-image'>
                        <img src={image} alt=""/>
                    </div>
                    <div className='profile-detail'>
                       <h4>{name}</h4>
                       <p>{age}</p>
                    </div>
                </article>
               ) 
            })}
        </>
    )
}


export default List