import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItem = () => {
    const [menu, ,refetch] = useMenu();
     const [axiosSecure] = useAxiosSecure();

    const deleteHandler = item =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res =>{
                console.log("delete id",res.data);
                refetch()
                if (res.data.deletedCount > 0){
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            })
          }

        });
    }
    return (
      <div className="w-full">
        <SectionTitle
          heading="Manage All Items"
          subHeading="Hurry up"
        ></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.category}</td>
                  <td className="text-right">{item?.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs bg-red-600 btn-sm text-white">
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteHandler(item)}
                      className="btn btn-ghost btn-xs bg-red-600 btn-sm text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageItem;