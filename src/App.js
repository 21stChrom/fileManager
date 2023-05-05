import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>

const renderFiles = () => {
    const containers = [];
      for (let i = 0; i < 30; i++) {
          const file = files[i];
              containers.push(
                    <div
                            key={i}
                                    className={`file-container hidden-${i + 1}`}
                                            onClick={() => console.log(`File ${i + 1} clicked`)}
                                                  >
                                                          {file ? <span>{file.name}</span> : null}
                                                                </div>
                                                                    );
                                                                      }

                                                                        return (
                                                                            <div
                                                                                  className="outer-container"
                                                                                        onMouseEnter={handleMouseEnter}
                                                                                              onMouseLeave={handleMouseLeave}
                                                                                                  >
                                                                                                        {containers}
                                                                                                            </div>
                                                                                                              );
                                                                                                              };

                                                                                                              const handleMouseEnter = (event) => {
                                                                                                                const containers = Array.from(
                                                                                                                    document.querySelectorAll(".file-container")
                                                                                                                      );
                                                                                                                        const target = event.target.closest(".file-container");
                                                                                                                          if (target) {
                                                                                                                              const targetIndex = Number(target.className.match(/\d+/g)[0]) - 1;
                                                                                                                                  containers.splice(targetIndex, 1);
                                                                                                                                      target.classList.add("visible");
                                                                                                                                          containers.forEach((container, index) =>
                                                                                                                                                container.classList.add(`hidden-${index + 1}`)
                                                                                                                                                    );
                                                                                                                                                      }
                                                                                                                                                      };

                                                                                                                                                      const handleMouseLeave = () => {
                                                                                                                                                        const containers = Array.from(
                                                                                                                                                            document.querySelectorAll(".file-container")
                                                                                                                                                              );
                                                                                                                                                                const visibleContainer = document.querySelector(".visible");
                                                                                                                                                                  if (visibleContainer) {
                                                                                                                                                                      visibleContainer.classList.remove("visible");
                                                                                                                                                                          containers.forEach((container, index) =>
                                                                                                                                                                                container.classList.remove(`hidden-${index + 1}`)
                                                                                                                                                                                    );
                                                                                                                                                                                      }
                                                                                                                                                                                      };
                                                                                                                                                                                      
}






      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
