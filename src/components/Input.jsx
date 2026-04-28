export default function Input({ label, type = 'text', value, onChange, name, placeholder, className = '' }) {
  return (
    <label className={`floating-group ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ' '}
        className="floating-input"
      />
      <span className="floating-label">{label}</span>
    </label>
  );
}
