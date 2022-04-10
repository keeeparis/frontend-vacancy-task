import styled, { keyframes } from 'styled-components'

const blobBottom = keyframes`
    25%, 50%, 75% {
        top: 50%;
        left: 100%;
    }
    100% {
        top: 0;
        left: 50%;
    }
`
const blobLeft = keyframes`
    25% {
        top: 50%;
        left: 0;
    }
    50%, 100% {
        top: 100%;
        left: 50%;
    }
`
const blobTop = keyframes`
    50% {
        top: 0;
        left: 50%;
    }
    75%, 100% {
        top: 50%;
        left: 0;
    }
`
const blobSpinnerMover = keyframes`
    0%, 100% {
        top: 0;
        left: 50%;
    }
    25% {
        top: 50%;
        left: 100%;
    }
    50% {
        top: 100%;
        left: 50%;
    }
    75% {
        top: 50%;
        left: 0;
    }
`

export const Spinner = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const Blob = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid var(--black);
    
    width: 10px;
    height: 10px;
    border-radius: 50%;
`
export const Top = styled(Blob)`
    top: 0;
    animation: ${blobTop} 1s infinite ease-in;
`
export const Bottom = styled(Blob)`
    top: 100%;
    animation: ${blobBottom} 1s infinite ease-in;
`
export const Left = styled(Blob)`
    left: 0;
    animation: ${blobLeft} 1s infinite ease-in;
`
export const MoveBlob = styled(Blob)`
    background: var(--black);
    top: 0;
    animation: ${blobSpinnerMover} 1s infinite ease-in;
`
