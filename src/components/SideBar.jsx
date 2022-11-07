import { Stack } from "@mui/material";
import { categories, collection, explore } from "../utils/constants";

const selectedCategory = "Home";

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "#FC1503",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <span
      style={{
        color: "#fff",
        fontSize: "24px",
        borderTop: "1px solid #3d3d3d",
        marginTop: "10px",
        marginBottom: "10px",
        paddingTop: "10px",
      }}
    ></span>

    {collection.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "#FC1503",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <span
      style={{
        color: "#fff",
        fontSize: "24px",
        borderTop: "1px solid #3d3d3d",
        marginTop: "20px",
        marginBottom: "20px",
        paddingTop: "20px",
      }}
    >
      Explore
    </span>
    {explore.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "#FC1503",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
