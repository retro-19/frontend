import React, { useState } from 'react';

const Landing = () => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setValue("");
      };

        return(
            <div>
            <h3>Welcome to Retro Board'19.</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Board Name: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    {...console.log(value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Find Board" className="btn btn-primary"></input>
                </div>
            </form>
            </div>
        )
}

export default Landing;