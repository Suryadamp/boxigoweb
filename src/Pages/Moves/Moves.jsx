import React, { useState, useEffect } from "react";
function Moves() {
  const [move, setMove] = useState([]);
  const [toggledItems, setToggledItems] = useState({});
  const [toggledInventoryItems, setToggledInventoryItems] = useState({});
  const getData = async () => {
    try {
      const response = await fetch("http://test.api.boxigo.in/sample-data/");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMove(data.Customer_Estimate_Flow);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString.replace(" ", "T"));
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return `${date
      .toLocaleDateString("en-US", options)
      .replace(",", "")} at ${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  }

  const handleToggle = (index) => {
    setToggledItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handleInventoryToggle = (index) => {
    setToggledInventoryItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  //   console.log(move)

  const CategoryList = ({data})=> {
   console.log({data})
   return(
      <div>
{data.category.map((e,i)=> {
   return(
      <div style={{marginBottom:10}}>
         <text style={{margin:10}}>{e.displayName}</text>
         <text style={{marginLeft:20}}>{e.items.length}</text>
      </div>
   )
})}
      </div>
   )
  }

  const HouseDetails = ({ items }) => {
    return (
      <div>
        <text style={{ fontWeight: 700 }}>House Details</text>
        <button
          style={{
            backgroundColor: "black",
            borderStyle: "none",
            height: 30,
            borderRadius: "5px",
            marginLeft: 20,
          }}
        >
          <span style={{ color: "white" }}>Edit house details</span>
        </button>

        <div style={{ marginBlockStart: 50 }}>
          <text style={{ color: "orangered", fontWeight: 700 }}>
            Existing House Details
          </text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBlock: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Floor No.</text>
              <text>{items.old_floor_no}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Elevator Available</text>
              <text>{items.old_elevator_availability}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Package Required</text>
              <text>{items.packing_service}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>
                Distance from truck to door
              </text>
              <text>{items.old_parking_distance}</text>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text style={{ fontWeight: 600 }}>Additional Information</text>
            <text>No additional info</text>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "black",
            height: "1px",
            marginBlock: "10px",
          }}
        ></div>
        <div style={{ marginBlockStart: 10 }}>
          <text style={{ color: "orangered", fontWeight: 700 }}>
            New House Details
          </text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBlock: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Floor No.</text>
              <text>{items.new_floor_no}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Elevator Available</text>
              <text>{items.new_elevator_availability}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>Package Required</text>
              <text>{items.packing_service}</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ fontWeight: 600 }}>
                Distance from truck to door
              </text>
              <text>{items.new_parking_distance}</text>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text style={{ fontWeight: 600 }}>Additional Information</text>
            <text>No additional info</text>
          </div>
        </div>
      </div>
    );
  };

  const InventoryDetails = ({ items }) => {
   //  console.log(items);
    return (
      <div>
        <div style={{ marginBlock: 10 }}>
          <text style={{ fontWeight: 700 }}>Inventory Details</text>
          <button
            style={{
              backgroundColor: "black",
              borderStyle: "none",
              height: 30,
              borderRadius: "5px",
              marginLeft: 20,
            }}
          >
            <span style={{ color: "white" }}>Edit Inventory</span>
          </button>
          {items.items.inventory.map((data, i) => {
            return (
               <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "whitesmoke",
                  marginBlock: 10,
                  height: 40,
                }}
                onClick={() => handleInventoryToggle(i)}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <text>{data.displayName}</text>
                  <div
                    style={{
                      marginLeft: 10,
                      width: 25,
                      height: 15,
                      backgroundColor: "orangered",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <text style={{ color: "white", fontSize: 12 }}>
                      {data.category.length}
                    </text>
                  </div>
                </div>
                <div style={{ margin: 10 }}>
                 {toggledInventoryItems[i] ? <i class="fa fa-chevron-up"></i> : <i class="fa fa-chevron-down"></i>} 
                </div>
              </div>
{toggledInventoryItems[i] && <CategoryList data={data}/>}
              </div>
            );
          })}
        </div>
        <HouseDetails items={items} />
      </div>
    );
  };

  return (
    <div>
      <h1 className="move-header"> My Moves </h1>
      {move &&
        move.map((ele, index) => {
          return (
            <div key={index.toString()}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBlock: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                  }}
                >
                  <text style={{ fontWeight: "700" }}>From</text>
                  <text>{ele.moving_from}</text>
                </div>
                <div style={{ width: "10%" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      style={{ color: "red" }}
                      className="fa fa-arrow-right"
                    ></i>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
                  }}
                >
                  <text style={{ fontWeight: "700" }}>To</text>
                  <text>{ele.moving_to}</text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "10%",
                  }}
                >
                  <text style={{ fontWeight: "700" }}>Request#</text>
                  <text style={{ color: "orangered" }}>{ele.estimate_id}</text>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBlock: "20px",
                }}
              >
                <div>
                  <i
                    style={{ color: "red", marginRight: 10 }}
                    className="fa fa-house"
                  ></i>
                  <text>{ele.property_size}</text>
                </div>
                <div>
                  <i
                    style={{ color: "red", marginRight: 10 }}
                    className="fa fa-cubes"
                  ></i>
                  <text>{ele.total_items}</text>
                </div>
                <div>
                  <i
                    style={{ color: "red", marginRight: 10 }}
                    className="fa fa-location-dot"
                  ></i>
                  <text>{ele.distance}</text>
                </div>

                <div>
                  <i
                    style={{ color: "red", marginRight: 10 }}
                    className="fa fa-calendar-days"
                  ></i>
                  <text>{formatDateTime(ele?.moving_on)}</text>
                  <i style={{ marginLeft: 10 }} className="fa fa-pencil"></i>
                </div>
                <div>
                  <input type="checkbox"></input>
                  <text>is flexable</text>
                </div>
                <div>
                  <button
                    onClick={() => handleToggle(index)}
                    style={{
                      backgroundColor: "white",
                      borderColor: "orangered",
                      borderBlockColor: "orangered",
                      height: 30,
                      marginRight: 20,
                      borderStyle: "solid",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ color: "orangered" }}>
                      Veiw more details
                    </span>
                  </button>
                  <button
                    style={{
                      backgroundColor: "orangered",
                      borderStyle: "none",
                      height: 30,
                      borderRadius: "5px",
                    }}
                  >
                    <span style={{ color: "white" }}>Quotes Awaiting</span>
                  </button>
                </div>
              </div>
              <div>
                <i
                  style={{ color: "red", marginRight: 10 }}
                  className="fa fa-triangle-exclamation"
                ></i>
                <text style={{ fontWeight: "700" }}>Disclaimer:</text>
                <text>
                  {" "}
                  please update your move date befor two days of shifting
                </text>
              </div>
              {toggledItems[index] && <InventoryDetails items={ele} />}
              <div
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  height: "1px",
                  marginBlock: "10px",
                }}
              ></div>
            </div>
          );
        })}
    </div>
  );
}

export default Moves;
