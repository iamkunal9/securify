import {mongoose} from "mongoose"

const Userschema = new mongoose.Schema(
  {
    "_id": {
      "type": "String"
    },
    "data": {
      "category": {
        "type": [
          "Mixed"
        ]
      },
      "data": {
        "type": [
          "Mixed"
        ]
      }
    }
  }, 
    { 
        collection: 'data-restro' 
    }
)
export default mongoose.models.User || mongoose.model('User', Userschema)
