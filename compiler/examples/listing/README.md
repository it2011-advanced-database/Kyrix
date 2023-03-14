## This is the Listings project.

### To run:

- Install Docker/docker-compose.
- In root directory: `sudo ./run-kyrix.sh --build`
- Add the real-estate database:
`../../../docker-scripts/load-sql.sh listing.sql --dbname real_estate`
- copy the complile script`cp ../../../docker-scripts/compile.sh compile.sh` into the working directory
- make the compile script runnable: `chmod +x compile.sh`                                                 
- Run one of the files in compiler/examples/covid-vis/ssv/: `sudo ./compile.sh listings.js`
- Open: `[your-public-ip]:8000`
