const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3 ,'Firstname must be atleast 3 character long']
        },
        lastname:{
            type:String,
            minlength:[3,"Lastname must be atleast 3 character long"],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3, 'Color must be 3 character long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be atleast 3 character long'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"Capacity must be atleast 1"],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        },
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }

})

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10);
}


const captainModel=mongoose.model('captain',captainSchema);
module.exports=captainModel;







// fullname: {
//     firstname: "John",
//     lastname: "Doe"
// },
// email: "john.doe@example.com",
// password: "SuperSecretPassword123",
// socketId: "socket12345",
// status: "active",
// vehicle: {
//     color: "Red",
//     plate: "XYZ123",
//     capacity: 4,
//     vehicleType: "car"
// }

// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I2MWUxNWEyNWFiZGRmNGE5YWZmMzEiLCJpYXQiOjE3Mzk5ODg1MDEsImV4cCI6MTc0MDA3NDkwMX0.C0rLij8VXXroiFgoaAycapHVqXYkz7k4o4kWZAxSkvs","captain":{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"$2b$10$8Gn7zsLXzfV.zorHlw5RAuiV1/Gfy/RK516t0j8xJ5CrtufJGHfoW","status":"inactive","vehicle":{"color":"Red","plate":"XYZ123","capacity":4,"vehicleType":"car"},"_id":"67b61e15a25abddf4a9aff31","__v":0}}