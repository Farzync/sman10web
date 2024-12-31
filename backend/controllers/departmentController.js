const { Department, Member, Profile, Hierarchy } = require('../models');  // Ensure you import Hierarchy if necessary

const getDepartments = async (req, res) => {
  try {
    // Retrieve departments with members and profiles, including hierarchy if needed
    const departments = await Department.findAll({
      include: {
        model: Member,
        include: [
          {
            model: Profile,
          },
          {
            model: Hierarchy, // Assuming the hierarchy is in a separate model
          },
        ]
      }
    });

    // Format data into the desired structure
    const departmentData = departments.map(department => {
      return {
        department: department.name,  // Assuming the department name is in `department.name`
        members: department.Members.map(member => {
          return {
            id: member.id,
            profile: {
              name: member.Profile.name,
              image: member.Profile.image,
              description: member.Profile.description,
            },
            position: member.position,
            hierarchy: member.Hierarchies.map(hierarchy => ({
              role: hierarchy.role,  // Assuming the role is in `hierarchy.role`
              level: hierarchy.level,  // Assuming the level is in `hierarchy.level`
            })) || [],  // If no hierarchy exists, return an empty array
          };
        })
      };
    });

    // Send the formatted response
    res.json({ departments: departmentData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getDepartments };
