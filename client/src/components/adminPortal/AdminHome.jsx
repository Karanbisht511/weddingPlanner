// Header
// Content->  1->AddInvitationTemplate,Delete,update,showAll
//            2->AddResorts,Delete,update,showAll
//            3->AddPhotographers,Delete,update,showAll
//            4->AddVideographer,Delete,update,showAll
//            5->AddDecorators,Delete,update,showAll
// Footer
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

import { useForm } from "react-hook-form";

import "./AdminHome.css";

export default function AdminHome() {
  const [showAddNew, setShowAddNew] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    console.log(file);

    const formData = new FormData();

    formData.append("details", JSON.stringify(data));
    if (!file) {
      alert("insert image");
      formData.delete("details");
      return;
    } else {
      formData.append("image", file);

      console.log(formData);

      Axios.post(`http://localhost:5000/${addButton}/createNew`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
      document.querySelector("#admin-form").reset();
      setShowAddNew(false);
    }
  };

  const addHeaderAndFooter = () => {
    const footer = document.querySelector("#footer");
    const header = document.querySelector("#header");
    console.log(footer);
    console.log(header);
    if (footer.style.display === "none") footer.style.display = "block";
    if (header.style.display === "none") header.style.display = "block";
  };

  const removeHeaderAndFooter = () => {
    const footer = document.querySelector("#footer");
    const header = document.querySelector("#header");
    footer.style.display = "none";
    header.style.display = "none";
  };

  useEffect(removeHeaderAndFooter, []);

  const [selected, setSelected] = useState();

  const toggleBlueBg = (e) => {
    document.querySelector("#admin-form").reset();
    setShowAddNew(false);
    const blueBg = e.target;
    if (selected) {
      selected.classList.remove("blue-bg");
    }
    setSelected(blueBg);
    blueBg.classList.add("blue-bg");
  };

  const [data, setData] = useState();
  const [details, setDetails] = useState();
  const [addButton, setAddButton] = useState();

  const fetchAllData = (path) => {
    setAddButton(path);
    Axios.get(`http://localhost:5000/${path}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setDetails(response.data[0].details);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  };

  const deleteThis = (item) => {
    console.log(item);
    const id = item._id;
    Axios.delete(`http://localhost:5000/${addButton}/delete`, {
      params: { id },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [file, setFile] = useState();

  const saveFile = (file) => {
    console.log(file);
    setFile(file);
  };

  return (
    <div id="admin" className="admin-home-container">
      <h1>Adminpage</h1>
      <div className="flex-container admin-content-container">
        <div id="categories">
          <h2> categories</h2>
          <div className="categories">
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("weddingResorts");
              }}
            >
              Venues
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("photographer");
              }}
            >
              Photographer
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("videographer");
              }}
            >
              Videographer
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("cosmetologist");
              }}
            >
              Cosmetologist
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("decorator");
              }}
            >
              Decorator
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("travelAgency");
              }}
            >
              Travel Agency
            </div>
            <div
              className="category"
              onClick={(e) => {
                toggleBlueBg(e);
                fetchAllData("invitationTemplate");
              }}
            >
              Card Templates
            </div>
          </div>
        </div>
        <div id="information">
          <div className="headers">
            <div
              style={{ width: "200px", border: "1px solid grey" }}
              className="button2"
            >
              <SearchIcon />
              <input
                style={{ border: "1px solid white" }}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <form id="admin-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="table-data">
              <table>
                {details && (
                  <tr>
                    <th>SNo.</th>
                    {Object.keys(details).map((key) => {
                      if (key !== "__v" && key !== "_id" && key !== "image")
                        return <th>{key.toUpperCase()}</th>;
                    })}
                    <th>ACTION</th>
                  </tr>
                )}

                {data &&
                  data.map((item, index) => {
                    return (
                      <tr
                        style={
                          index % 2 === 0
                            ? { backgroundColor: "#F8F8F8" }
                            : { backgroundColor: "white" }
                        }
                      >
                        <td>{index + 1}</td>
                        {Object.entries(item.details).map(([key, value]) => {
                          if (
                            key !== "__v" &&
                            key !== "_id" &&
                            key !== "image"
                          ) {
                            return <td>{value}</td>;
                          }
                        })}
                        <td className="flex-container">
                          <ModeEditOutlineIcon sx={{ color: "blue" }} />
                          <PhotoSizeSelectActualIcon
                            onClick={() => {
                              console.log(item.image);

                              setImg(item.image);

                              setShowImage(!showImage);
                            }}
                          />
                          <DeleteIcon
                            onClick={() => {
                              deleteThis(item);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}

                {showAddNew ? (
                  <tr className="newData">
                    <td>{data.length + 1}</td>

                    {Object.keys(data[0].details).map((key) => {
                      if (key !== "__v" && key !== "_id" && key !== "image")
                        return (
                          <td>
                            <input
                              className="admin-input-box"
                              type="text"
                              placeholder={`${key}...`}
                              name={key}
                              {...register(`${key}`, { required: true })}
                            />
                          </td>
                        );
                    })}
                    <td className="flex-container">
                      <label
                        className="admin-add-button-left  blue"
                        for="selectImage"
                      >
                        <AddPhotoAlternateIcon />
                        <input
                          id="selectImage"
                          type="file"
                          onChange={(e) => {
                            console.log(e);
                            saveFile(e.target.files[0]);
                          }}
                          // accept="image/*"
                        />
                      </label>

                      <button
                        type="submit"
                        className="admin-add-button-right blue"
                      >
                        add
                      </button>
                    </td>
                  </tr>
                ) : null}
              </table>
            </div>
          </form>

          {addButton && (
            <div
              className="admin-add-button2 blue"
              onClick={() => {
                setShowAddNew(!showAddNew);
                setShowImage(false);
              }}
            >
              <AddIcon />
              <button style={{ border: "none" }} className="blue">
                Add {addButton}
              </button>
            </div>
          )}

          {showImage && (
            <div>
              {console.log(img)}
              <img
                className="adminImages"
                src={`http://localhost:5000/uploads/${img.filename}`}
                alt="venue"
              />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
