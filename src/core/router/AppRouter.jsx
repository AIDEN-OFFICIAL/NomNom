import { Routes, Route, BrowserRouter } from 'react-router-dom'
import  MainLayout  from '../../shared/layouts/MainLayout';
import { Body } from '../../shared/components/Body';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  element={<MainLayout/>}>
                    <Route path='/' element={<Body/>} />
                </Route>    
                <Route path='/login' element={<div>Login page</div>} />
                <Route path='/customer' element={<div>customer home page</div>} />
                <Route path='/Partner' element={<div>Delivery partner</div>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter