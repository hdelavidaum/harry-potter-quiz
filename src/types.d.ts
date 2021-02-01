import { StyledComponentBase } from 'styled-components';


export interface IInput {
    type: string
    placeholder?: string
    onChange?: () => void
    value?: string
    disabled?: boolean
}

export interface Idb {
    theme:{
            colors: {
              primary?: string,
              secondary?: string,
              mainBg?: string,
              contrastText?: string,
              wrong?: string,
              success?: string,
              darkBlue?: string,
              darkRed?: string, 
              darkerRed?: string, 
              dargKray?: string ,
              yellow?: string,
              caramel?: string
          }
    }
}

export interface IButton {
    nameForm?: boolean
}

export interface IFinalResult {
    playerName: string
}

export interface IFooter {
    quizesDaGalera?: boolean;
  }

export interface ILoading {
    result?: boolean
}

export interface IQuestion {
    questionNumber: number,
    totalOfQuestions: number,
    onSubmitCallback: () => void,
    question: {
        title: string,
        description: string,
        image: string,
        alternatives: string[],
        answer: number
    }
}

export interface IWidget extends StyledComponentBase<any, {}> {
    Content?: any;
    Header?: any;
    Image?: any;
    Topic?: any;
    Input?: any;
    nameForm?: boolean;
    quizesDaGalera?: boolean;
    loader?: boolean;
  }