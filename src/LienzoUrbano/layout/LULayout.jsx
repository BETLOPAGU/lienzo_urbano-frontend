import { PrincipalNavbar } from 'LienzoUrbano/components';
import { Toolbar } from '@mui/material';

export const LULayout = ({children}) => {
  return (
    <>
      <PrincipalNavbar />
      <div className='wrapper'>
        <div className='main'>
          <Toolbar />

          {children}
        </div>
      </div>
    </>
  )
}
