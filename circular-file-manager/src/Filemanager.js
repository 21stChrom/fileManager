import React from 'react';

const files = [
  { name: 'File 1' },
  { name: 'File 2' },
  // Add more files as needed...
];

const Filemanager = () => {
  const handleMouseEnter = (event) => {
    const containers = Array.from(
      document.querySelectorAll('.file-container')
    );
    const target = event.target.closest('.file-container');

    if (target) {
      containers.splice(containers.indexOf(target), 1);
      target.classList.add('visible');

      containers.forEach((container, index) => {
        container.classList.add(`hidden-${index + 1}`);
      });
    }
  };

  const handleMouseLeave = () => {
    const containers = Array.from(
      document.querySelectorAll('.file-container')
    );
    const visibleContainer = document.querySelector('.visible');

    if (visibleContainer) {
      visibleContainer.classList.remove('visible');
      containers.forEach((container) => {
        for (let i = 1; i <= 30; i++) {
          container.classList.remove(`hidden-${i}`);
        }
      });
    }
  };

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
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {containers}
      </div>
    );
  };

  return <div className="file-manager">{renderFiles()}</div>;
};

export default < Filemanager />;
