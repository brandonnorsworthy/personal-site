import { queryHelper } from "../../../db/database";

export const fetchPeople = async () => {
  try {
    return await queryHelper('SELECT * FROM wedding_invites_people');
  } catch (error) {
    console.error('Error fetching people:', error);
    return [];
  }
};

export const fetchGroupById = async (rsvpId: string) => {
  try {
    return await queryHelper(`SELECT g.id, g.name,
    COUNT(p.id) AS number_of_people
    FROM wedding_invites_group g
    LEFT JOIN wedding_invites_people p ON g.id = p.group_id
    WHERE g.id = $1
    GROUP BY g.id, g.name;`, [rsvpId], true);
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const fetchGroups = async () => {
  try {
    return await queryHelper('SELECT * FROM wedding_invites_group');
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};