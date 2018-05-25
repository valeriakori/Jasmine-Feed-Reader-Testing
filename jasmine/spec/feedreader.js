/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

 /* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', () => {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("should have a (defined) URL that is not empty", () => {
            allFeeds.forEach(idx => {
                expect(idx.url).toBeDefined();
                expect(idx.url.length).not.toBe(0);
            });

        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("should have a (defined) name that is not empty", () => {
            allFeeds.forEach(idx => {
                expect(idx.name).toBeDefined();
                expect(idx.name.length).not.toBe(0);
            });
        });
            
    });


    describe('The menu', () => {

        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it("should change visibility when menu icon is clicked", () => {

            let trigger = $('.menu-icon-link');

            //click first time 
            trigger.click()
            expect($('body').hasClass('menu-hidden')).toBe(false)

            //click second time
            trigger.click()
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });
    });

        

        

    describe("Initial entries", () => {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach( (done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it('contains at least one entry after running loadFeed()', (done) => {
            let feedLength = $('.feed .entry').length

            expect(feedLength).toBeGreaterThan(0);

            done();
        });
    });


    describe('New Feed Selection', () => {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var oldFeed,
            newFeed;

        beforeEach( (done) => {
            loadFeed(0,() => {
                oldFeed = $('.feed')[0].innerText;
                loadFeed(1,() => {
                    newFeed = $('.feed')[0].innerText;
                    done();
                });
            });
        });
        
        it('changes content', (done) => {
            expect(oldFeed).not.toBe(newFeed);

            done();
        });
    });
        
}());
