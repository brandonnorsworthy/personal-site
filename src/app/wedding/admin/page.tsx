import React from "react";
import Navbar from "../components/Navbar";
import { Group, People } from "../typescript/interfaces";
import { fetchGroups, fetchPeople } from "../db/queries";

export const metadata = {
  title: 'Gallery',
  description: 'Gallery of photos from Brandon and Madison\'s wedding in 2024!',
}

const Page: React.FC = async () => {
  const people: People[] = await fetchPeople()
  const groups: Group[] = await fetchGroups()

  return (
    <main className='min-h-[85vh] w-full flex flex-col items-center'>
      <Navbar />
      <h1>Status of People Scanning</h1>
      <div className="mt-6 w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center">
        <table>
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Confirmed</th>
              <th>Has Scanned</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr className="odd:bg-gray-200" key={group.id}>
                <td className="px-4">{group.name}</td>
                <td className="px-4">{group.confirmed ? 'Unknown' : group.confirmed ? 'Confirmed' : 'Not Confirmed'}</td>
                <td className="px-4">{group.has_scanned ? 'Has Scanned' : 'Has Not Scanned'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='w-full md:w-[85%] lg:w-[75%] xl:w-[1000px] flex flex-col items-center'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Group ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr className="odd:bg-gray-200" key={person.id}>
                <td className="px-4">{person.firstname} {person.lastname}</td>
                <td className="px-4">{person.group_id}</td>
                <td className="px-4">{person.status === null ? 'Unknown' : person.status ? 'Attending' : 'Not Attending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};


export default Page;