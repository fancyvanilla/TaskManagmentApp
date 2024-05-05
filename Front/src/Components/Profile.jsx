import React from 'react'
import CUTECAT from '../assets/CUTECAT.jpg'
import { useParams } from 'react-router-dom'
import { getUser } from '../Service/Service'
import SideBar from './SideBar'


const Profile = ({todos}) => {
    const {id}=useParams();
  return (
    <div className='d-flex flex-row'>
    <SideBar id={id} todos={todos} />
    <div className='d-flex flex-column gap-4 profile'>
        <div class="text-center shadow mt-0">
            <img class="rounded-circle mb-3 mt-4" src={CUTECAT} width="50" height="50" />
            <div class="mb-3">
                <button class="btn btn-primary btn-sm" type="button">Change Photo</button>
            </div>
        </div>
        <div class="col-12 px-5">
    <div class="card shadow mb-3">
        <div class="card-header py-3">
            <p class="text-primary m-0 fw-bold">User Settings</p>
        </div>
        <div class="card-body">
            <form>
                <div class="row">
                    <div class="col">
                        <div class="mb-3"><label class="form-label" for="username"><strong>Username</strong></label><input id="username" class="form-control" type="text" placeholder="user.name" name="username" /></div>
                    </div>
                    <div class="col">
                        <div class="mb-3"><label class="form-label" for="email"><strong>Email Address</strong></label><input id="email" class="form-control" type="email" placeholder="user@example.com" name="email" /></div>
                    </div>
                </div>
                <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
            </form>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Profile