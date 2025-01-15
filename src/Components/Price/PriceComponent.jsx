import React from "react";

const PriceComponent = () => {
  return (
    <section>
      <div className="w-full h-[100vh]">
        <h1>Packages and Price</h1>
        <div>
          <table className="table-fixed border-2 border-gray-800">
            <thead>
              <tr className="table-fixed border-2 border-gray-800">
                <th className="table-fixed border-2 border-gray-800">
                  Regular Membership
                </th>
                <th className="table-fixed border-2 border-gray-800">
                  1 month
                </th>
                <th className="table-fixed border-2 border-gray-800">
                  3 months
                </th>
                <th className="table-fixed border-2 border-gray-800">
                  6 months
                </th>
                <th className="table-fixed border-2 border-gray-800">1 year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-fixed border-2 border-gray-800">
                <td className="table-fixed border-2 border-gray-800">Gym</td>
                <td className="table-fixed border-2 border-gray-800">3500</td>
                <td className="table-fixed border-2 border-gray-800">5500</td>
                <td className="table-fixed border-2 border-gray-800">6500</td>
                <td className="table-fixed border-2 border-gray-800">7500</td>
              </tr>
              <tr>
                <td className="table-fixed border-2 border-gray-800">
                  Gym and Cardio
                </td>
                <td className="table-fixed border-2 border-gray-800">4000</td>
                <td className="table-fixed border-2 border-gray-800">4500</td>
                <td className="table-fixed border-2 border-gray-800">5500</td>
                <td className="table-fixed border-2 border-gray-800">6500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceComponent;
