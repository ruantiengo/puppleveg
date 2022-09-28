import React from "react"
import { styled } from "../../../../stitches.config"
type HeaderProps = {
    title: string
}
const Header = ({title}: HeaderProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Profile>
               <NameProfile>Ruan Tiengo</NameProfile>
               <PhotoProfile src="https://media-exp1.licdn.com/dms/image/C4E03AQFhx69wW9BvpA/profile-displayphoto-shrink_200_200/0/1591805126257?e=2147483647&v=beta&t=5p47lK22PemfatBI3cZwYgKCHOEybTIupx5tVlU82DI"/>
            </Profile>
        </Container>
    )
}

const Container = styled('div',{
    width: '90%',
    height: 90,
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    justifyContent: 'space-between'
})
const Title = styled('h1',{
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,  
})
const Profile = styled('div',{
    borderLeft: '1px solid',
    paddingLeft: 20,
    opacity: 0.9,
    height: 35,
    borderColor: '$text_gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
})
const NameProfile = styled('span',{
    opacity: 1,
    color: '#000000',
    fontWeight: 600,
    fontSize: 19,
    letterSpacing: 0.2
})
const PhotoProfile = styled('img',{
    height: 40,
    width: 40,
    marginLeft: 12,
    borderRadius: '100%'
})
export default Header