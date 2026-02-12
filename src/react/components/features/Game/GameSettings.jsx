import { useState } from "react";

function GameSettings({ onApply }) {
  const [localRange, setLocalRange] = useState({
    min: null,
    max: null
  });

  return (
    <form 
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onApply(localRange);
      }}
    >
      <fieldset className="form-fieldset">
        <legend className="form-legend mb-4">
          <span className="fs-lg">Set range</span>
        </legend>

        <div className="form-row">
          <div className="form-outline">
            <input
              id="min-range"
              type="number"
              className="form-control"
              placeholder="1"
              value={localRange.min || ""}
              onChange={(e) => setLocalRange(prev => ({
                ...prev,
                min: Number(e.target.value)
              }))}
            />
            <label htmlFor="min-range" className="form-label">
              Min
            </label>
          </div>
        
          <div className="form-outline">
            <input
              id="max-range"
              type="number"
              className="form-control"
              placeholder="10"
              value={localRange.max || ""}
              onChange={(e) => setLocalRange(prev => ({
                ...prev,
                max: Number(e.target.value)
              }))}
            />
            <label htmlFor="max-range" className="form-label">
              Max
            </label>
          </div>

          <button
            className="btn btn-primary"
            disabled={
              !localRange.min ||
              !localRange.max ||
              (localRange.min >= localRange.max)
            }
          >Apply</button>
        </div>
      </fieldset>
    </form>
  );
}

export default GameSettings;
