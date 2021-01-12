import React from 'react'
import {SortimentContainer, SortimentHeading, SortimentWrapper, SortimentCard, SortimentImg, SortimentInfo, SortimentTitle, SortimentDesc, SortimentBtn} from './SortimentElements';

const Sortiment = ({heading, data}) => {
    return (
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
                            <SortimentBtn>{sortiment.button}</SortimentBtn>
                        </SortimentInfo>
                    </SortimentCard>
                    );
                })}
            </SortimentWrapper>
        </SortimentContainer>
    )
}

export default Sortiment
