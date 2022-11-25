import React from 'react'

//styles comps
import { LI, ListContainer, ListData, ListDiv, UL } from './ExpenseStyledCMPS'

function ExpenseList(props) {
  return (
    <ListContainer>
        <ListDiv>
            <UL>
                {props.value.map((item)=>(
                    <LI key={item.id}><ListData>{`Category: ${item.select} -- Description: ${item.description} -- Price: ${item.money}`}</ListData></LI>
                ))}
            </UL>
        </ListDiv>
    </ListContainer>
  )
}

export default ExpenseList