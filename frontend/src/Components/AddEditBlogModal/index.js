import React, { useEffect, useMemo} from "react";
import {Modal} from "bootstrap";

export default function AddEditBlogModal( {addBlog}) {

  
  const addEditModalDOM = document.getElementById("addEditModal");
  const addEditModal = new Modal(addEditModalDOM);

  useEffect(() => {
    if (addBlog) {
      addEditModal.show();
    }
  }, [addBlog]);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
