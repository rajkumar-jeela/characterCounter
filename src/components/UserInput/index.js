import {UserInputElement, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputElement>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
    </UserInputElement>
  )
}

export default UserInput
