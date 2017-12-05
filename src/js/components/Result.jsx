import React from 'react';

const Result = ({ result }) => {
    return (
      <div>
        <div className="card alert">
          <a href={result.html_url} className="btn btn-simple btn-info" target="_blank">
            {result.full_name}
          </a>
          🌟<strong>{result.stargazers_count}</strong>
          <p>
          {result.description}
        </p>
        </div>

        <br />
      </div>
     
    );
  };
  
  export default Result;