
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyProfile = () => {
    const [user] = useAuthState(auth);

   const updateProfile =(event)=>{
    event.preventDefault();
    const linkedinProfile = event.target.linkedin.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const education = event.target.education.value;
    const updateProfile = {
        linkedinProfile: linkedinProfile,
        location: location,
        phone:phone,
        education:education
        
    };
 
        const email = user?.user?.email;
       
    
        if(email){
          fetch(`https://machine-parts.web.app/profile/`, {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(updateProfile)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                
            })
            
        }
    
      



    
   
   }
    return (
        <div>
            <h1>This is my profile</h1>

            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h4 class="text-2xl font-bold"> Name :{user?.displayName}</h4>
      <h4 class="text-2xl font-bold"> Email :{user?.email}</h4>
      
    </div>
    <form onSubmit={updateProfile}>

    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Linkedin Profile Link</span>
          </label>
          <input type="text" name='linkedin' placeholder="Linkedin Profile Link" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input type="number" name='phone' placeholder="Phone" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Location</span>
          </label>
          <input type="text" placeholder="Location" name='location' class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <input type="text" name='education' placeholder="Your Education" class="input input-bordered" />
         
        </div>
        <div class="form-control mt-6">
          <input type='submit' value='Update Profile 'class="btn btn-primary"/>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default MyProfile;