async function getBlogs(onSuccess, onError) {
    //return new Promise((resolve, reject) => {
    try {
        const data = await fetch("https://iX-blog-app", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const blogsAPIData = await data 
            .json()
            return blogsAPIData;
    }
    catch (error) {
        throw new Error(error);
    }
        
        // .then((data) => {
        //     console.log("Success");
        //     data
        //         .json()
        //         .then((blogs) => {
        //             console.log(blogs.message);
        //             onSuccess(blogs.data);
        //         })
        //         .catch((error) => {
        //             onError(error);
        //         });
        //     onSuccess();
        // })
        // .catch((error) => {
        //     console.log("Error");
        //     onError();
        // });
    
        
   // })
    
};

