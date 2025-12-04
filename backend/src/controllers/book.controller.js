import { asyncHandler } from "../utils/asynchandler.js";
import { book } from "../models/book.model.js";

const registerBook = asyncHandler(
  // book entry
  (req, res) => {
    const { Title, Author, PublishedDate, Publication } = req.body;
    console.log(`TItle: ${Title}`);

    // check conditiions
    if (
      [Title, Author, PublishedDate, Publication].some(
        (feilds) => feilds?.trim() == ""
      )
    )
      console.log("Erro in data providing");

      //checking if entry exists


    // storing data
    book.create({
        Title, Author, PublishedDate, Publication
    })


    // response send
    res.status(200).json(
        {
           message:"books entry created "
        }
    )
        
   
  }
);

export {registerBook}
