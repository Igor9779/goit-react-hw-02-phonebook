export const Filter = ({filter, filterInput}) => (
    <label>
        <input
            type="text"
            name={filter}
            onChange={filterInput}
        />
    </label>
)