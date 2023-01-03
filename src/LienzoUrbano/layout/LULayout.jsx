import { Toolbar } from '@mui/material';

export const LULayout = ({children}) => {
  return (
    <>
      <div className='wrapper'>
        <div className='main'>
          <Toolbar />

          {children}
        </div>
      </div>
    </>
  )
}
