import React from 'react'
import {SortimentContainer, SortimentHeading, SortimentWrapper, SortimentCard, SortimentImg, SortimentInfo, SortimentTitle, SortimentDesc} from './SortimentElements';

const Sortiment = ({heading, data}) => {
    return (
        <div id='sortiment'>
        <SortimentContainer>
            <SortimentHeading>{heading}</SortimentHeading>
            <SortimentWrapper>
                {data.map((sortiment, index) => {
                    return(
                    <SortimentCard key={index}>
                        <SortimentImg src={sortiment.img} alt={sortiment.alt}/>
                        <SortimentInfo>
                            <SortimentTitle>{sortiment.name}</SortimentTitle>
                            <SortimentDesc>{sortiment.desc}</SortimentDesc>
                        </SortimentInfo>
                    </SortimentCard>
                    );
                })}
            </SortimentWrapper>
        </SortimentContainer>
        </div>
    )
}

export default Sortiment
