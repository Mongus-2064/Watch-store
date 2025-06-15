        // Adding watch Functionality
        import Watch from "../Models/watch.js";

        export const addwatch = async (req, res) => {
        const { name, companyname, warranty,price, type } = req.body;

        if (!name || !companyname || !warranty ||!price || !type) {
            res.status(400).json({ error: "Every field must be filled up!" });
        }
        try {
            const newWatch = new Watch({ name, companyname, warranty,price, type });
            await newWatch.save();
            return res.status(201).json({msg:"Watch added successfully",watch:newWatch})
        } catch (error) {
            if (error.code == "11000") {
            res.status(400).json({ error: "Watch already exists in this shop" });
            }
            console.log("Error adding watch", error);
        }
        };



    


        //Deleting watch

        export const deletewatch = async (req,res)=>{
    try {
        const {id} = req.params;
    await Watch.findByIdAndDelete(id);
    return res.status(201).json({msg:"Deleted the watch successfully!"});
    } catch (error) {
        res.status(400).json({error:"Error while deleting the watch"})
    }

        }
