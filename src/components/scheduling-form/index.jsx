import React, { useEffect } from 'react';

const SchedulingForm = ({ formData, handleInputChange }) => {

  useEffect(() => {
  }, [formData]);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="notice" className="form-label">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="notice"
          name="notice"
          value={formData.notice}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Data</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Prioridade</label>
        <input
          type="text"
          className="form-control"
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status</label>
        <input
          type="text"
          className="form-control"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="comments" className="form-label">Comentários</label>
        <textarea
          className="form-control"
          id="comments"
          name="comments"
          rows="3"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </form>
  );
};

export default SchedulingForm;
