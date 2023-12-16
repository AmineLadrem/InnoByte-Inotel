import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export function Tables() {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    email: "",
    job: ["", ""],
    date: "",
  });

  const [error, setError] = useState(null);

  const [authorsData, setAuthorsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.0.6:1880/stafflist");
        const data = await response.json();
        console.log(data);

        // Modify the data here
        const modifiedData = data.map((item) => ({
          ...item,
          date: new Date(item.date).toLocaleDateString(),
          name: item.firstname + " " + item.lastname,
          job: item.job,
        }));

        setAuthorsData(modifiedData);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (key, value) => {
    setNewAuthor((prevAuthor) => ({
      ...prevAuthor,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update existing row
      const updatedData = authorsData.map((item, index) =>
        index === editIndex ? newAuthor : item
      );
      setAuthorsData(updatedData);
      setEditIndex(null);
    } else {
      // Add new row
      setAuthorsData((prevData) => [...prevData, newAuthor]);
    }

    setNewAuthor({
      name: "",
      email: "",
      job: ["", ""],
      date: "",
    });
    closeAddModal();
  };

  const openAddModal = (index) => {
    setIsModalOpen(true);
    if (index !== undefined) {
      // Edit existing row
      setEditIndex(index);
      setNewAuthor(authorsData[index]);
    }
  };

  const closeAddModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Staff Table
          </Typography>
        </CardHeader>
        {!error ? (
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Person", "Job", "Date", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {authorsData.map(({ name, email, job, date }, index) => {
                  const className = `py-3 px-5 ${
                    index === authorsData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        {editIndex === index ? (
                          <form onSubmit={handleSubmit}>
                            <Input
                              size="lg"
                              placeholder="Name"
                              value={newAuthor.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                            />
                            <Input
                              size="lg"
                              placeholder="Email"
                              value={newAuthor.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                            />
                            <Input
                              size="lg"
                              placeholder="Job Title"
                              value={newAuthor.job}
                              onChange={(e) =>
                                handleInputChange("job", [
                                  e.target.value,
                                  newAuthor.job,
                                ])
                              }
                            />
                            <Input
                              size="lg"
                              placeholder="Job Description"
                              value={newAuthor.job}
                              onChange={(e) =>
                                handleInputChange("job", [
                                  newAuthor.job,
                                  e.target.value,
                                ])
                              }
                            />
                            <Input
                              size="lg"
                              placeholder="Date"
                              value={newAuthor.date}
                              onChange={(e) =>
                                handleInputChange("date", e.target.value)
                              }
                            />
                            <Button type="submit" className="mt-4">
                              Save
                            </Button>
                            <Button
                              onClick={closeAddModal}
                              color="gray"
                              className="mt-2"
                            >
                              Cancel
                            </Button>
                          </form>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {email}
                              </Typography>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className={className}>
                        {editIndex === index ? (
                          <div className="flex flex-col gap-6">
                            <Input
                              size="lg"
                              placeholder="Job Title"
                              value={newAuthor.job}
                              onChange={(e) =>
                                handleInputChange("job", [
                                  e.target.value,
                                  newAuthor.job,
                                ])
                              }
                            />
                            <Input
                              size="lg"
                              placeholder="Job Description"
                              value={newAuthor.job}
                              onChange={(e) =>
                                handleInputChange("job", [
                                  newAuthor.job,
                                  e.target.value,
                                ])
                              }
                            />
                          </div>
                        ) : (
                          <>
                            <Typography className="text-xs font-semibold text-blue-gray-600">
                              {job}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {job}
                            </Typography>
                          </>
                        )}
                      </td>
                      <td className={className}>
                        {editIndex === index ? (
                          <Input
                            size="lg"
                            placeholder="Date"
                            value={newAuthor.date}
                            onChange={(e) =>
                              handleInputChange("date", e.target.value)
                            }
                          />
                        ) : (
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        )}
                      </td>
                      <td className={className}>
                        {editIndex === index ? (
                          <Button type="submit" className="text-xs font-semibold text-blue-gray-600">
                            Save
                          </Button>
                        ) : (
                          <Typography
                            as="a"
                            href="#"
                            onClick={() => openAddModal(index)}
                            className="text-xs font-semibold text-blue-gray-600 cursor-pointer"
                          >
                            Edit
                          </Typography>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Add Button and Modal Trigger */}
            <div className="mt-4">
              <Button onClick={() => openAddModal()} className="mt-2 mx-5 text-white">
                Add Employee
              </Button>
            </div>
          </CardBody>
        ) : (
          error
        )}
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className="bg-black bg-opacity-50 fixed  "
              onClick={closeAddModal}
            ></div>
            <div className="bg-black p-4 max-w-md w-full rounded-2xl shadow-md">
              <Typography variant="h6" className="mb-4 font-semibold text-white">
                {editIndex !== null ? "Edit Employee" : "Add Employee"}
              </Typography>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  size="lg"
                  placeholder="Name"
                  value={newAuthor.name}
                  className="bg-white"
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Input
                  size="lg"
                  placeholder="Email"
                  value={newAuthor.email}
                  className="bg-white"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
               
                <Input
                  size="lg"
                  placeholder="Job"
                  value={newAuthor.job}
                  className="bg-white"
                  onChange={(e) =>
                    handleInputChange("job", [newAuthor.job, e.target.value])
                  }
                />
                <Input
                  size="lg"
                  placeholder="Date"
                  value={newAuthor.date}
                  className="bg-white"
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
                <div>
                <Button type="submit" className="mt-4 bg-white text-black mx-2">
                  {editIndex !== null ? "Save" : "Submit"}
                </Button>
                <Button
                  onClick={closeAddModal}
                  color="gray"
                  className="mt-4 bg-white text-black"
                >
                  Cancel
                </Button>
                </div>
              </form>

              
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

export default Tables;
